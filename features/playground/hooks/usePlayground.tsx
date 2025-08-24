import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";
import { TemplateFolder } from "../lib/path-to-json";
import { getPlaygroundById } from "../actions";

interface PlaygroundData {
  id: string;
  name?: string;
  [key: string]: any;
  // Add other relevant fields
}

interface UsePlaygroundReturn {
  playgroundData: PlaygroundData | null;
  templateData: TemplateFolder | null;
  isLoading: boolean;
  error: String | null;
  loadPlayground: () => Promise<void>;
  savePlayground: (data: TemplateFolder) => Promise<void>;
}

export const usePlayground = (id: string): UsePlaygroundReturn => {
    const [playgroundData, setPlaygroundData] = useState<PlaygroundData | null>();
    const [templateData, setTemplateData] = useState<TemplateFolder | null>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<String | null>();

    const loadPlayground = useCallback(async () => {
        if (!id) return;
        try{
            setIsLoading(true);
            setError(null);
            const data = await getPlaygroundById(id);

        }catch(error){

        }finally{

        }

    }, [id]);
}
