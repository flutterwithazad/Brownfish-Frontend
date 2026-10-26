import { useRef, useState } from 'react';
import { Link } from 'wouter';
import { ArrowUpRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { projects } from '@/pages/project-data';
type Project = (typeof projects)[number];

// Both portfolio views share destinations, platform selection, and focus restoration.
export function useProjectActions() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const action = (project: Project) => {
    const destination = project.websiteUrl || (!(project.playStoreUrl && project.appStoreUrl) && (project.playStoreUrl || project.appStoreUrl));
    return destination ? <a className="case-card-action" href={destination} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name}${project.websiteUrl ? ' website' : project.playStoreUrl ? ' on Google Play' : ' on the App Store'}`} /> : <button type="button" className="case-card-action" aria-label={project.playStoreUrl && project.appStoreUrl ? `Choose a store for ${project.name}` : `View ${project.name} details`} onClick={event => { opener.current = event.currentTarget; setActiveProject(project); }} />;
  };
  const chooser = <Dialog open={activeProject !== null} onOpenChange={open => { if (!open) setActiveProject(null); }}>
    <DialogContent className="project-store-dialog" onCloseAutoFocus={event => { event.preventDefault(); opener.current?.focus(); }}>
      <span className="section-kicker">{activeProject?.playStoreUrl && activeProject?.appStoreUrl ? 'CHOOSE YOUR PLATFORM' : 'PROJECT DETAILS'}</span>
      <DialogTitle>{activeProject?.name}</DialogTitle>
      <DialogDescription>{activeProject?.playStoreUrl && activeProject?.appStoreUrl ? 'Choose your app store to explore and download the app.' : activeProject?.description}</DialogDescription>
      <div className="project-store-options">
        {activeProject?.playStoreUrl && <a href={activeProject.playStoreUrl} target="_blank" rel="noopener noreferrer">Google Play<ArrowUpRight size={20}/></a>}
        {activeProject?.appStoreUrl && <a href={activeProject.appStoreUrl} target="_blank" rel="noopener noreferrer">App Store<ArrowUpRight size={20}/></a>}
        {activeProject && !activeProject.playStoreUrl && !activeProject.appStoreUrl && <Link href="/contact">Enquire about this project<ArrowUpRight size={20}/></Link>}
      </div>
    </DialogContent>
  </Dialog>;
  return { action, chooser };
}
