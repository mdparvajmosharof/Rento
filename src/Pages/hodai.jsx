

const hodai = () => {
    return (
        <div>
            <div className=" relative">
            <input
              className=" pl-5 w-full py-2 rounded-md"
              type={passwordShow ? "text" : "password"}
              name="password"
              id=""
              required
            />
            <span
              className=" absolute right-8 top-3 "
              onClick={() => setPasswordShow(!passwordShow)}
            >
              {passwordShow ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>
        </div>
    );
};

export default hodai;