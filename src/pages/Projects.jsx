import ProjectCard from "../components/ProjectCard.jsx";
import cloudTrackerImage from "../assets/cloud_native_issue_tracker.png";

const projects = [
  {
    title: "Cloud-Native Issue Tracker System",
    description: "A fully containerized, serverless issue tracking platform built with AWS Lambda, DynamoDB, and API Gateway, designed for enterprise-scale operations. The project integrates with Slack and email for real-time notifications, supports role-based access, and includes CI/CD pipelines via GitHub Actions. This mirrors my experience in IT support process optimization and cloud-native application deployment.",
    githubLink: "https://github.com/VinceBiggz/cloud-native-issue-tracker",
    demoLink: "https://demo.cloud-issue-tracker.com",
    image: cloudTrackerImage,
  },
  {
    title: "Zero-Touch Device Deployment & MDM Pipeline",
    description: "An automated provisioning pipeline for laptops and mobile devices using JumpCloud MDM, Ansible, and Terraform. It supports policy enforcement, security baselines, and application installation before first login. Inspired by my work implementing zero-touch deployments to improve onboarding efficiency for remote teams.",
    githubLink: "https://github.com/VinceBiggz/zero-touch-deployment",
    demoLink: "",
    image: cloudTrackerImage, // Placeholder - replace with actual image when available
  },
  {
    title: "Enterprise KPI & Analytics Dashboard",
    description: "A centralized KPI reporting dashboard powered by Metabase and AWS RDS, with role-based views for executives, operations teams, and IT staff. It includes integrations with Jira, Freshdesk, and ERP systems to provide real-time SLA, ticket resolution, and operational efficiency metrics. Reflects my leadership in data-driven decision-making.",
    githubLink: "https://github.com/VinceBiggz/enterprise-kpi-dashboard",
    demoLink: "https://kpi-dashboard.demo.com",
    image: cloudTrackerImage, // Placeholder - replace with actual image when available
  },
  {
    title: "InfoSec Compliance Framework Toolkit (ISO 27001-Inspired)",
    description: "A mock ISO 27001 compliance management system with modules for asset registers, risk assessment, incident reporting, and audit trails. Built with Django, PostgreSQL, and Bootstrap, it demonstrates the process of structuring and automating compliance workflows based on my experience as an ISO/IEC 27001 Lead Auditor.",
    githubLink: "https://github.com/VinceBiggz/iso27001-compliance-toolkit",
    demoLink: "https://compliance-toolkit.demo.com",
    image: cloudTrackerImage, // Placeholder - replace with actual image when available
  },
  {
    title: "Serverless Web Application Deployment with Infrastructure as Code",
    description: "A reference implementation for deploying a secure, scalable web application using AWS CloudFormation, S3 static hosting, CloudFront CDN, and Route 53 DNS. The repository includes automated SSL provisioning and environment-specific configurations. Based on my track record in cloud infrastructure delivery.",
    githubLink: "https://github.com/VinceBiggz/serverless-web-deployment",
    demoLink: "https://serverless-demo.com",
    image: cloudTrackerImage, // Placeholder - replace with actual image when available
  },
  {
    title: "ML-Powered IT Operations Assistant",
    description: "A microservice deployed in Kubernetes that leverages Python, FastAPI, and scikit-learn to predict ticket resolution times and recommend support categorization. This project blends my interest in AI with my IT operations expertise, showing how machine learning can be applied to service desk optimization.",
    githubLink: "https://github.com/VinceBiggz/ml-it-operations",
    demoLink: "https://ml-ops-assistant.demo.com",
    image: cloudTrackerImage, // Placeholder - replace with actual image when available
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}