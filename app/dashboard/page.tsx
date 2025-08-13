import EmptyState from "@/components/ui/empty-state";
import { getAllPlaygroundForUser } from "@/features/dashboard/actions";
import AddNewButton from "@/features/dashboard/components/add-new-button";
import AddRepoButton from "@/features/dashboard/components/add-repo-button";
import ProjectTableWrapper from "@/features/dashboard/components/project-table-wrapper"; // 🆕 wrapper component
import React from "react";

const page = async () => {
  const playgrounds = await getAllPlaygroundForUser();

  return (
    <div className="flex flex-col justify-start items-center min-h-screen mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-wrap gap-4 w-full justify-start">
                <AddNewButton />
                <AddRepoButton />     {" "}
      </div>
           {" "}
      <div className="mt-10 flex flex-col justify-center items-center w-full">
               {" "}
        {playgrounds && playgrounds.length === 0 ? (
          <EmptyState
            title="No Playgrounds Found"
            description="Get started by creating a new playground or importing a repository."
            imageSrc="/empty-state.svg"
          />
        ) : (
          <ProjectTableWrapper playgrounds={playgrounds} /> // ✅ Moved to client wrapper
        )}
             {" "}
      </div>
         {" "}
    </div>
  );
};

export default page;
