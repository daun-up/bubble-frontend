const GNB = () => {
  return (
    <div
      className="relative flex flex-1 items-center justify-between h-[75px] pl-4 pr-4 rounded-[8px]"
      style={{
        color: 'white',
        zIndex: 1000,
        WebkitBackdropFilter: 'blur(2px)',
        backdropFilter: 'blur(2px)',
        boxShadow:
          'inset 0 2px 6px rgba(255, 255, 255, 0.25), inset 0 -8px 40px rgba(255, 255, 255, 0.08)',
      }}
    >
      <a>login</a>
    </div>
  );
};
export default GNB;
