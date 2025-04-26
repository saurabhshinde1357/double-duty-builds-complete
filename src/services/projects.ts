
import { supabase } from '@/lib/supabase';

export interface Project {
  id: string;
  name: string;
  description: string;
  status: "planning" | "in-progress" | "completed";
  teamSize: number;
  deadline: string;
  progress: number;
  user_id: string;
  created_at: string;
}

export const projectsService = {
  async getProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async createProject(projectData: Omit<Project, 'id' | 'user_id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('projects')
      .insert([projectData])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateProject(id: string, projectData: Partial<Project>) {
    const { data, error } = await supabase
      .from('projects')
      .update(projectData)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteProject(id: string) {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};
