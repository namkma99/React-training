import React, { useMemo, useState } from "react";

type ProjectContextType = {
  project: any[]; // You may want to specify a more specific type here
  setProject: (data: any[]) => void; // Adjust the type if needed
};

export const ProjectContext = React.createContext<ProjectContextType>({
  project: [],
  setProject: () => {},
});

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [project, setProject] = useState<any[]>([]); // Adjust the type if needed

  const value = useMemo(() => {
    return { project, setProject };
  }, [project]);

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};
