import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { profile } from "../config";

export default function ResumePage() {
  return (
    <main className="resume-page page-wrap">
      <Link className="text-action" href="/"><ArrowLeft size={15}/> Back to portfolio</Link>
      <p className="eyebrow">RESUME</p>
      <h1>Sakshi Kadel<span>.</span></h1>
      <p className="resume-intro">UI/UX Designer · Pune, India</p>
      <a className="button button-dark resume-download" href={profile.resumePdf} download>
        <Download size={16}/> Download resume
      </a>
      <div className="resume-viewer">
        <iframe src={profile.resumePdf} title="Sakshi Kadel resume PDF" />
      </div>
      <p className="resume-help">Add your PDF as <code>public/resume.pdf</code>. If no PDF has been added yet, upload it before publishing this page.</p>
    </main>
  );
}
