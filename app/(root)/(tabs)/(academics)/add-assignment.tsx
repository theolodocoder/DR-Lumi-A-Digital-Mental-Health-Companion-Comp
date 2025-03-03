import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

const GradeOption = ({ grade, selected, onSelect }) => {
  // Determine color based on grade
  const getGradeColor = () => {
    if (grade.startsWith("A")) return "#81c784"; // Green for A's
    if (grade.startsWith("B")) return "#4fc3f7"; // Blue for B's
    if (grade.startsWith("C")) return "#ffb74d"; // Orange for C's
    if (grade.startsWith("D")) return "#ff8a65"; // Orange-red for D's
    return "#ef5350"; // Red for F's
  };

  return (
    <TouchableOpacity
      style={[
        styles.gradeOption,
        selected && styles.selectedGradeOption,
        selected && { backgroundColor: getGradeColor() },
      ]}
      onPress={() => onSelect(grade)}
    >
      <Text
        style={[
          styles.gradeText,
          selected && { color: "white", fontWeight: "bold" },
        ]}
      >
        {grade}
      </Text>
    </TouchableOpacity>
  );
};

const AddAssignmentScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [notes, setNotes] = useState("");

  // Grade options
  const grades = [
    "A+",
    "A",
    "A-",
    "B+",
    "B",
    "B-",
    "C+",
    "C",
    "C-",
    "D+",
    "D",
    "D-",
    "F",
  ];

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const handleSave = () => {
    const newAssignment = {
      id: Date.now().toString(),
      title,
      course,
      date: date.toISOString(),
      grade: selectedGrade,
      notes,
    };

    // Here you would save to your database (Supabase, etc.)
    console.log("Saving assignment:", newAssignment);

    // Navigate back to previous screen or grades list
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoid}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Ionicons name="chevron-back" size={24} color="#6b4f38" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Add Assignment</Text>
            <View style={styles.placeholder} />
          </View>

          {/* Assignment Form */}
          <View style={styles.form}>
            <Text style={styles.label}>Assignment Name</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
              placeholder="e.g., Midterm Exam, Essay #2"
              placeholderTextColor="#999"
            />

            <Text style={styles.label}>Course</Text>
            <TextInput
              style={styles.input}
              value={course}
              onChangeText={setCourse}
              placeholder="e.g., Biology 101, Calculus"
              placeholderTextColor="#999"
            />

            <Text style={styles.label}>Date</Text>
            <TouchableOpacity
              style={styles.dateInput}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
              <Ionicons name="calendar" size={20} color="#6b4f38" />
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}

            <Text style={styles.label}>Grade</Text>
            <View style={styles.gradesContainer}>
              {grades.slice(0, 7).map((grade) => (
                <GradeOption
                  key={grade}
                  grade={grade}
                  selected={selectedGrade === grade}
                  onSelect={setSelectedGrade}
                />
              ))}
            </View>
            <View style={styles.gradesContainer}>
              {grades.slice(7).map((grade) => (
                <GradeOption
                  key={grade}
                  grade={grade}
                  selected={selectedGrade === grade}
                  onSelect={setSelectedGrade}
                />
              ))}
            </View>

            <Text style={styles.label}>Notes</Text>
            <TextInput
              style={[styles.input, styles.notesInput]}
              value={notes}
              onChangeText={setNotes}
              placeholder="Add any additional details about this assignment..."
              placeholderTextColor="#999"
              multiline={true}
              numberOfLines={4}
            />
          </View>

          {/* Save Button */}
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Assignment</Text>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  placeholder: {
    width: 24,
  },
  form: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    fontSize: 14,
  },
  notesInput: {
    height: 100,
    textAlignVertical: "top",
  },
  dateInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  dateText: {
    fontSize: 14,
    color: "#333",
  },
  gradesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  gradeOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    margin: 4,
  },
  selectedGradeOption: {
    borderWidth: 0,
  },
  gradeText: {
    fontSize: 14,
    color: "#333",
  },
  saveButton: {
    backgroundColor: "#6b4f38",
    borderRadius: 20,
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginRight: 5,
  },
});

export default AddAssignmentScreen;
