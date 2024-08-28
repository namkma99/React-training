import React from "react";
import { ProjectProvider } from "./projectContext";
import ProjectTable from "./components/projectTable";
import ProjectForm from "./components/projectForm";
import useProduct from "./hooks/useProduct";

const ProjectIndex = () => {
  const { loading } = useProduct();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <ProjectProvider>
      <ProjectTable />
      <ProjectForm />
    </ProjectProvider>
  );
};

export default ProjectIndex;
