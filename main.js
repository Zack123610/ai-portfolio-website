import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <p className="text-gray-600 text-lg">Cloud Engineer | DevOps | Security Enthusiast</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:youremail@example.com">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <Card>
          <CardContent className="p-4 text-gray-700">
            <p>
              I'm a driven IT professional with a strong foundation in AWS, DevOps, and cloud
              infrastructure. I enjoy solving real-world problems through automation and secure design
              practices. My interests lie in cloud security, infrastructure as code, and building
              scalable systems.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">Private AWS VPC Module</h3>
              <p className="text-gray-700">
                Designed and implemented a reusable Terraform module to provision private VPCs on AWS
                with public/private subnets, NAT gateway, and route tables.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">File Exchange Tracker</h3>
              <p className="text-gray-700">
                Built a system to track file movement across different systems, storing audit trails
                and metadata in structured JSON format to ensure traceability.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <Card>
          <CardContent className="p-4">
            <p className="text-gray-700">
              Feel free to reach out via email or connect with me on LinkedIn or GitHub. I'm always
              open to discussing new opportunities and collaborations!
            </p>
            <div className="mt-4">
              <Button asChild>
                <a href="mailto:youremail@example.com">Email Me</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
