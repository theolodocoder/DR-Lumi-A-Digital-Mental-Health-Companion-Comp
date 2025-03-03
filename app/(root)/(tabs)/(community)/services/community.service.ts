import { supabase } from "@/lib/supabase";

export const CommunityService = {
  async getPosts(category = "all") {
    const query = supabase
      .from("community_posts")
      .select(
        `
        id,
        content,
        category,
        created_at,
        anonymous_identities!inner(anonymous_name, avatar_code)
      `
      )
      .eq("is_flagged", false)
      .order("created_at", { ascending: false });

    if (category !== "all") query.eq("category", category);

    const { data, error } = await query;
    return { data, error };
  },

  async createPost(userId, content, category) {
    // Get or create anonymous identity
    const { data: identity } = await supabase
      .from("anonymous_identities")
      .select()
      .eq("user_id", userId)
      .single();

    if (!identity) {
      const newIdentity = {
        user_id: userId,
        anonymous_name: `User${Math.floor(1000 + Math.random() * 9000)}`,
        avatar_code: Math.random().toString(36).substring(2, 8),
      };

      await supabase.from("anonymous_identities").insert([newIdentity]);
    }

    const { data: post, error } = await supabase
      .from("community_posts")
      .insert([
        {
          anonymous_user_id: userId,
          content,
          category,
        },
      ])
      .select();

    return { post, error };
  },

  async reportPost(postId, reason) {
    const { error } = await supabase.from("reported_posts").insert([
      {
        post_id: postId,
        reason,
      },
    ]);

    return { error };
  },
};
