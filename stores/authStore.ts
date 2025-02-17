import { supabase } from "@/lib/supabase";
import { Session, User } from "@supabase/supabase-js";
import { create } from "zustand";

type AuthState = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setSession: (session: Session | null) => void;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  loading: false,

  setUser: (user) => set({ user }),
  setSession: (session) => set({ session }),

  login: async (email, password) => {
    set({ loading: true });
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    set({ user: data.user, session: data.session, loading: false });
  },

  register: async (email, password) => {
    set({ loading: true });
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    set({ user: data.user, session: data.session, loading: false });
  },

  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null, session: null });
  },

  resetPassword: async (email) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) throw error;
  },
}));
