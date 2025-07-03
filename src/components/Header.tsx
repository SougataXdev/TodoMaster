import { CheckCircle, Sparkles, Star, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="relative mb-8 sm:mb-12 text-center px-4 sm:px-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-1/4 sm:left-1/4 text-primary/20 animate-float">
          <Sparkles className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>
        <div className="absolute top-6 sm:top-8 right-1/4 text-secondary/30 animate-bounce">
          <Star className="w-3 h-3 sm:w-4 sm:h-4" />
        </div>
        <div className="absolute -top-1 sm:-top-2 right-1/3 text-accent/25 animate-pulse delay-300">
          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div className="absolute top-3 sm:top-4 left-1/3 text-primary/15 animate-pulse delay-700">
          <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>
      
      {/* Main header content */}
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight tracking-tight animate-gradient text-shadow-glow">
          TodoMaster
        </h1>
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mt-3 sm:mt-4 font-medium tracking-wide animate-float px-2 sm:px-0">
          Organize your life, one task at a time
        </p>
        
        {/* Decorative line */}
        <div className="mt-4 sm:mt-6 flex justify-center">
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-gradient"></div>
        </div>
        
        {/* Stats or motivational text */}
        <div className="mt-3 sm:mt-4 flex items-center justify-center space-x-2 text-xs sm:text-sm text-muted-foreground">
          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
          <span>Your productivity companion</span>
        </div>
      </div>
      
      {/* Subtle background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl -z-10 animate-glow"></div>
    </header>
  );
};

export default Header;
