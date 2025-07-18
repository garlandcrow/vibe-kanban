import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  FolderOpen,
  Settings,
  BookOpen,
  Server,
  MessageCircleQuestion,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (value: string) => {
    if (value.startsWith('http')) {
      window.open(value, '_blank', 'noopener,noreferrer');
    } else {
      navigate(value);
    }
  };

  // Get the display name for the current route
  const getCurrentPageName = () => {
    switch (location.pathname) {
      case '/projects':
        return 'Projects';
      case '/mcp-servers':
        return 'MCP Servers';
      case '/settings':
        return 'Settings';
      default:
        return 'Menu';
    }
  };

  return (
    <div className="border-b">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 md:space-x-6">
            <Logo />
            <div className="hidden md:flex items-center space-x-1">
              <Button
                asChild
                variant={
                  location.pathname === '/projects' ? 'default' : 'ghost'
                }
                size="sm"
              >
                <Link to="/projects">
                  <FolderOpen className="mr-2 h-4 w-4" />
                  Projects
                </Link>
              </Button>
              <Button
                asChild
                variant={
                  location.pathname === '/mcp-servers' ? 'default' : 'ghost'
                }
                size="sm"
              >
                <Link to="/mcp-servers">
                  <Server className="mr-2 h-4 w-4" />
                  MCP Servers
                </Link>
              </Button>
              <Button
                asChild
                variant={
                  location.pathname === '/settings' ? 'default' : 'ghost'
                }
                size="sm"
              >
                <Link to="/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </Button>
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Select value="" onValueChange={handleNavigation}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder={getCurrentPageName()} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="/projects">
                    <div className="flex items-center">
                      <FolderOpen className="mr-2 h-4 w-4" />
                      Projects
                    </div>
                  </SelectItem>
                  <SelectItem value="/mcp-servers">
                    <div className="flex items-center">
                      <Server className="mr-2 h-4 w-4" />
                      MCP Servers
                    </div>
                  </SelectItem>
                  <SelectItem value="/settings">
                    <div className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </div>
                  </SelectItem>
                  <SelectItem value="https://vibekanban.com/">
                    <div className="flex items-center">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Docs
                    </div>
                  </SelectItem>
                  <SelectItem value="https://github.com/BloopAI/vibe-kanban/issues">
                    <div className="flex items-center">
                      <MessageCircleQuestion className="mr-2 h-4 w-4" />
                      Support
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Button asChild variant="ghost" size="sm">
              <a
                href="https://vibekanban.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Docs
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <a
                href="https://github.com/BloopAI/vibe-kanban/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircleQuestion className="mr-2 h-4 w-4" />
                Support
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
