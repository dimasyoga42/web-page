const Navbar = () => {
  return (
    <div className=" w-full h-16 flex justify-items-center gap-1 items-center">
      <img
        src="/avatar.jpg"
        className=" ml-3 w-10 h-10 rounded-full border border-[#fe9ec7]"
      />
      <div className="ml-2">
        <h1 className="text-[#fe9ec7] font-extrabold">Neura Rest Api</h1>
      </div>
    </div>
  );
};

export default Navbar;
