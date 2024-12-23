// LoginRegisterPage.jsx
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmailContext } from "../EmailContext/EmailContext";
import { FaRobot, FaBrain, FaChartLine, FaClock } from "react-icons/fa";
import "./ScrollingPrompts.css";

const LoginRegisterPage = () => {
  const { setEmail: setEmailContext } = useContext(EmailContext);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmailLocal] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const formErrors = {};
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      formErrors.email = "Please enter a valid email.";
    }
    if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
    }
    if (!isLogin && password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match.";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setEmailContext(email);
      navigate("/main", { replace: true });
    } else {
      setErrors(formErrors);
    }
  };

  const scrollingPrompts = {
    row1: [
      "Master complex calculus problems instantly",
      "Get step-by-step algebra solutions",
      "Understand trigonometry concepts clearly",
      "Excel in geometry with visual proofs",
    ],
    row2: [
      "Learn at your own pace",
      "Interactive problem solving",
      "Real-time explanations",
      "Practice with AI guidance",
    ],
    row3: [
      "Track your progress daily",
      "Personalized learning path",
      "24/7 math assistance",
      "Instant doubt resolution",
    ],
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white font-sans">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex-col justify-between p-8 md:p-12 bg-gradient-to-br from-[rgba(53,55,64,0.2)] to-[rgba(0,0,0,0)]">
        <div className="mb-8 md:mb-12">
          <h1 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Math Solver AI
          </h1>
          <p className="text-gray-400 text-xs md:text-sm">Powered by Pragyshala</p>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-8 md:mb-12">
            Transform your math learning journey with AI
          </h2>

          <div className="space-y-6">
            {Object.values(scrollingPrompts).map((row, i) => (
              <div key={i} className="overflow-hidden whitespace-nowrap mask-image-left mask-image-right">
                <div className={`inline-block animate-scroll-${i % 2 === 0 ? "left" : "right"}`}>
                  {row.map((prompt, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[rgba(255,255,255,0.1)] rounded-full px-6 py-2 mx-2 text-gray-400 text-sm"
                    >
                      {prompt}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Feature
              icon={<FaRobot />}
              title="AI-Powered Solutions"
              description="Get instant, accurate solutions to any math problem"
            />
            <Feature
              icon={<FaBrain />}
              title="Smart Learning"
              description="Adaptive learning path customized for you"
            />
            <Feature
              icon={<FaChartLine />}
              title="Progress Tracking"
              description="Monitor your improvement with detailed analytics"
            />
            <Feature
              icon={<FaClock />}
              title="24/7 Support"
              description="Get help anytime, anywhere"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 bg-gradient-to-b from-[rgba(30,21,21,0.2)] to-[rgba(0,0,0,0)]">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="text-center mb-6 md:hidden">
            <h1 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Math Solver AI
            </h1>
            <p className="text-gray-400 text-xs">Powered by Pragyshala</p>
          </div>

          <div className="bg-[rgba(32,33,35,0.5)] backdrop-blur-[16px] px-8 py-8 md:px-10 md:py-10 rounded-lg">
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {isLogin ? "Welcome back" : "Create account"}
              </h2>
              <p className="text-gray-400 text-xs md:text-sm">
                {isLogin ? "Enter your details to continue" : "Start your learning journey today"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => {
                    setEmailLocal(e.target.value);
                    setEmailContext(e.target.value);
                  }}
                  className={`w-full px-4 py-3 bg-[rgba(32,33,35,0.5)] border border-[rgba(255,255,255,0.1)] rounded-md text-white focus:outline-none focus:border-[#FF3366] focus:ring-2 focus:ring-[rgba(29,268,68,0.1)] ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-3 bg-[rgba(32,33,35,0.5)] border border-[rgba(255,255,255,0.1)] rounded-md text-white focus:outline-none focus:border-[#FF3366] focus:ring-2 focus:ring-[rgba(29,268,68,0.1)] ${
                    errors.password ? "border-red-500" : ""
                  }`}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              {!isLogin && (
                <div>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full px-4 py-3 bg-[rgba(32,33,35,0.5)] border border-[rgba(255,255,255,0.1)] rounded-md text-white focus:outline-none focus:border-[#FF3366] focus:ring-2 focus:ring-[rgba(29,268,68,0.1)] ${
                      errors.confirmPassword ? "border-red-500" : ""
                    }`}
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                </div>
              )}

              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#FF3366] border border-[#FF3366] rounded-md text-white font-medium hover:bg-[#eb184d] focus:outline-none focus:ring-2 focus:ring-[rgba(239,68,68,0.4)]"
              >
                {isLogin ? "Sign in" : "Create account"}
              </button>
            </form>

            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
              }}
              className="w-full mt-6 text-white text-sm hover:text-[#eb184d] focus:outline-none"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-10">
          © 2024 Pragyshala Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, description }) => (
  <div className="bg-[rgba(32,33,35,0.5)] border border-[rgba(255,255,255,0.1)] rounded-lg p-4 transition-all duration-300 hover:bg-[rgba(32,33,35,0.8)] hover:translate-y-[-0.5rem]">
  <div className="flex items-center mb-4">
    <div className="w-8 h-8 flex items-center justify-center bg-[rgba(29,268,68,0.1)] rounded-md mr-3 text-[#26c485]">
      {icon}
    </div>
    <h3 className="text-white font-semibold">{title}</h3>
  </div>
  <p className="text-gray-400">{description}</p>
</div>
);

export default LoginRegisterPage;
