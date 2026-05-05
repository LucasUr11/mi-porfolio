const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black pointer-events-none">
      
      <div className="absolute top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[150px]" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05),transparent_70%)]" />
    </div>
  );
};

export default GlobalBackground;