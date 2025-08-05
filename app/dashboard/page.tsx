import EmptyState from "@/components/ui/empty-state";
import { getAllPlaygroundForUser , deleteProjectById ,editProjectById , duplicateProjectById} from "@/features/dashboard/actions";
import AddNewButton from "@/features/dashboard/components/add-new-button";
import AddRepoButton from "@/features/dashboard/components/add-repo-button";
import ProjectTable from "@/features/dashboard/components/project-table";
import React from "react";

const page = async () => {
  // TODO: Replace this with actual data fetching logic
  const playgrounds = await getAllPlaygroundForUser();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-auto max-w-7xl p-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <AddNewButton />
        <AddRepoButton />
      </div>
      <div className="mt-10 flex flex-col justify-center items-center w-full">
        {playgrounds && playgrounds.length === 0 ? (
          <EmptyState
            title="No Playgrounds Found"
            description="Get started by creating a new playground or importing a repository."
            imageSrc="/empty-state.svg"
          />
        ) : (
          
          <ProjectTable
          // @ts-ignore
          projects={playgrounds || []}
          onDeleteProject={deleteProjectById}
            onUpdateProject={editProjectById}
            onDuplicateProject={async (id: string) => { await duplicateProjectById(id); }}
          />
          
        )}
      </div>
    </div>
  );
};

export default page;
