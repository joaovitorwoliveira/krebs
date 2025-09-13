export interface TeamMember {
  name: string;
  role: string;
}

export interface TeamSectionProps {
  className?: string;
}

export interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  className?: string;
}
