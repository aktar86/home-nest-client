import toast from "react-hot-toast";

const LoginCredentials = () => {
  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied!`);
  };

  const credentialStyle = {
    cursor: "pointer",
    padding: "5px",
    backgroundColor: "#f3f4f6",
    borderRadius: "4px",
    marginBottom: "5px",
    display: "inline-block",
    fontSize: "14px",
  };

  return (
    <div className="space-y-4 p-4 ">
      {/* Admin Credentials */}
      <div className="border-l-4 border-blue-500 pl-3">
        <h4 className="font-bold">Admin Account:</h4>
        <p
          onClick={() => copyToClipboard("admin@ph.com", "Email")}
          style={credentialStyle}
        >
          Email: admin@ph.com 📋
        </p>
        <br />
        <p
          onClick={() => copyToClipboard("123456aA@", "Password")}
          style={credentialStyle}
        >
          Pass: 123456aA@ 📋
        </p>
      </div>

      {/* User Credentials */}
      <div className="border-l-4 border-green-500 pl-3">
        <h4 className="font-bold">User Account:</h4>
        <p
          onClick={() => copyToClipboard("user@ph.com", "Email")}
          style={credentialStyle}
        >
          Email: user@ph.com 📋
        </p>
        <br />
        <p
          onClick={() => copyToClipboard("123456aA@", "Password")}
          style={credentialStyle}
        >
          Pass: 123456aA@ 📋
        </p>
      </div>
    </div>
  );
};
export default LoginCredentials;
