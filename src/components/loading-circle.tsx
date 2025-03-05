export const LoadingCircle: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[300px]">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
};
