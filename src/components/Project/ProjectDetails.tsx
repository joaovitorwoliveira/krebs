import { ProjectDetailProps } from "./types";

export const ProjectDetail = ({ label, value }: ProjectDetailProps) => (
  <div>
    <h3 className="text-xs uppercase tracking-wide text-dark font-semibold mb-1">
      {label}
    </h3>
    <p className="text-sm text-gray-blue">{value}</p>
  </div>
);
