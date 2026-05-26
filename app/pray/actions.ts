"use server";

import { createClient } from "@/lib/supabase/server";

export type Prayer = {
  id: number;
  name: string;
  created_at: string;
};

export async function submitPrayer(name: string): Promise<Prayer> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("prayers")
    .insert({ name })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getPrayers(): Promise<Prayer[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("prayers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}
