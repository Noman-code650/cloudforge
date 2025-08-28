import {
  Code2,
  Terminal,
  FolderOpen,
  Users,
  Cloud,
  Brain,
  GitBranch,
  Container,
  Monitor,
  Laptop
} from "lucide-react";

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: string;
  features: string[];
  status: "active" | "beta" | "coming-soon";
  detailedDescription: string;
  useCases: string[];
  technologies: string[];
}

export const modules: Module[] = [
  {
    id: "python-tasks",
    title: "Python Tasks",
    description: "Comprehensive Python automation suite for communication, monitoring, and creative tasks.",
    icon: Code2,
    category: "Automation",
    features: [
      "WhatsApp Automation",
      "Email & SMS Sending",
      "System Monitoring",
      "Random Art Generation",
      "Web Scraping to PDF",
      "Voice Calls"
    ],
    status: "active",
    detailedDescription: "A powerful Python-based automation module that combines messaging, system monitoring, and creative tools. Leverage pywhatkit for WhatsApp automation, Twilio for voice/SMS, and OpenCV for generative art.",
    useCases: [
      "Automated customer notifications",
      "System health monitoring",
      "Creative content generation",
      "Document automation"
    ],
    technologies: ["Python", "PyWhatKit", "Twilio", "OpenCV", "BeautifulSoup", "FPDF"]
  },
  {
    id: "ssh-executor",
    title: "SSH Remote Executor",
    description: "Secure remote command execution and server management via SSH protocol.",
    icon: Terminal,
    category: "Infrastructure",
    features: [
      "Secure SSH Connections",
      "Remote Command Execution",
      "Server Administration",
      "Real-time Output",
      "Error Handling",
      "Connection Management"
    ],
    status: "active",
    detailedDescription: "Execute commands on remote Linux/Unix systems securely through SSH. Perfect for server administration, automated deployments, and remote system monitoring.",
    useCases: [
      "Remote server maintenance",
      "Automated deployments",
      "System monitoring",
      "Batch operations"
    ],
    technologies: ["Paramiko", "SSH", "Linux", "Unix", "Security"]
  },
  {
    id: "file-manager",
    title: "Secure File Manager",
    description: "Web-based file management system with security features and remote access.",
    icon: FolderOpen,
    category: "Storage",
    features: [
      "Directory Navigation",
      "File Upload/Download",
      "Search Functionality",
      "Preview Capabilities",
      "Permission Management",
      "Security Validation"
    ],
    status: "active",
    detailedDescription: "A comprehensive file management solution with web interface, supporting secure file operations, directory browsing, and advanced search capabilities.",
    useCases: [
      "Remote file access",
      "Team file sharing",
      "Document management",
      "Backup operations"
    ],
    technologies: ["Python", "Pathlib", "Security", "Web Interface"]
  },
  {
    id: "attendance-system",
    title: "Smart Attendance System",
    description: "AI-powered attendance tracking with facial recognition and gesture detection.",
    icon: Users,
    category: "AI/ML",
    features: [
      "Facial Recognition",
      "Gesture Detection",
      "Student Enrollment",
      "Attendance Analytics",
      "Excel Integration",
      "Real-time Processing"
    ],
    status: "beta",
    detailedDescription: "Advanced attendance system using computer vision for face recognition and MediaPipe for gesture detection. Includes comprehensive analytics and Excel export capabilities.",
    useCases: [
      "Educational institutions",
      "Corporate attendance",
      "Event check-ins",
      "Security access control"
    ],
    technologies: ["OpenCV", "MediaPipe", "Face Recognition", "Pandas", "AI/ML"]
  },
  {
    id: "aws-tasks",
    title: "AWS Cloud Manager",
    description: "Comprehensive AWS service management and automation platform.",
    icon: Cloud,
    category: "Cloud",
    features: [
      "EC2 Management",
      "CloudWatch Monitoring",
      "S3 Operations",
      "Transcribe Services",
      "Cost Optimization",
      "Multi-region Support"
    ],
    status: "active",
    detailedDescription: "Complete AWS cloud management solution covering EC2 instances, S3 storage, CloudWatch logs, and Amazon Transcribe services with cost optimization features.",
    useCases: [
      "Cloud infrastructure management",
      "Cost optimization",
      "Audio transcription",
      "Log analysis"
    ],
    technologies: ["AWS", "Boto3", "EC2", "S3", "CloudWatch", "Transcribe"]
  },
  {
    id: "ai-business-planner",
    title: "AI Business Planner",
    description: "AI-powered business planning and startup idea analysis platform.",
    icon: Brain,
    category: "AI/ML",
    features: [
      "Business Idea Analysis",
      "Market Research",
      "Funding Strategies",
      "AI Chat Assistant",
      "Category Exploration",
      "Analytics Dashboard"
    ],
    status: "active",
    detailedDescription: "Leverage Google's Gemini AI for comprehensive business analysis, market research, and startup guidance with intelligent chat assistance and detailed analytics.",
    useCases: [
      "Startup planning",
      "Market analysis",
      "Investment decisions",
      "Business consulting"
    ],
    technologies: ["Google Gemini AI", "SQLite", "Pandas", "Business Intelligence"]
  },
  {
    id: "git-tasks",
    title: "Git Workflow Manager",
    description: "Automated Git operations and GitHub integration workflows.",
    icon: GitBranch,
    category: "DevOps",
    features: [
      "Repository Management",
      "Branch Workflows",
      "Fork Operations",
      "Pull Request Automation",
      "GitHub Integration",
      "Version Control"
    ],
    status: "active",
    detailedDescription: "Streamline Git workflows with automated repository management, branch operations, and GitHub API integration for collaborative development.",
    useCases: [
      "Automated deployments",
      "Code collaboration",
      "Version management",
      "CI/CD pipelines"
    ],
    technologies: ["Git", "GitHub API", "GitPython", "Subprocess", "DevOps"]
  },
  {
    id: "docker-tasks",
    title: "Docker Manager",
    description: "Comprehensive Docker container and image management platform.",
    icon: Container,
    category: "DevOps",
    features: [
      "Container Lifecycle",
      "Image Management",
      "System Cleanup",
      "Dockerfile Generation",
      "Resource Monitoring",
      "Multi-platform Support"
    ],
    status: "active",
    detailedDescription: "Complete Docker management solution for container operations, image handling, system maintenance, and automated Dockerfile generation.",
    useCases: [
      "Container orchestration",
      "Development environments",
      "Application deployment",
      "System maintenance"
    ],
    technologies: ["Docker", "Containers", "Images", "DevOps", "Automation"]
  },
  {
    id: "linux-tasks",
    title: "Linux Learning Hub",
    description: "Educational platform for Linux system administration and command-line mastery.",
    icon: Monitor,
    category: "Education",
    features: [
      "Interactive Tutorials",
      "Command References",
      "Best Practices",
      "Corporate Usage",
      "Terminal Automation",
      "Progress Tracking"
    ],
    status: "active",
    detailedDescription: "Comprehensive Linux education platform with interactive tutorials, command references, and real-world scenarios for system administration mastery.",
    useCases: [
      "Linux training",
      "System administration",
      "DevOps education",
      "Certification prep"
    ],
    technologies: ["Linux", "Unix", "CLI", "System Administration", "Education"]
  },
  {
    id: "windows-tasks",
    title: "Windows Automation",
    description: "Windows system automation and application management platform.",
    icon: Laptop,
    category: "Automation",
    features: [
      "Application Launching",
      "System Information",
      "File Management",
      "Security Operations",
      "Entertainment Access",
      "Automation Scripts"
    ],
    status: "active",
    detailedDescription: "Automate Windows operations including application launching, system information gathering, file management, and security operations through a web interface.",
    useCases: [
      "System automation",
      "Application management",
      "Security operations",
      "Productivity enhancement"
    ],
    technologies: ["Windows", "Python", "OS", "Psutil", "System Automation"]
  }
];