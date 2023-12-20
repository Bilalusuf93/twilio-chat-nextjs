"use client";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ChatArea = () => {
  const [message, setMessage] = useState("");
  const [toNumber, setToNumber] = useState("923222197622");
  const [loading, setLoading] = useState(false);
  const handleSend = async () => {
    setLoading(true);
    if (message) {
      try {
        const response = await axios.get("api/twilio", {
          params: {
            tonumber: toNumber,
            body: message,
          },
        });
        console.log(response);
        if (response.status === 200) {
          toast.success("Message has sent!");
          setMessage("");
          setLoading(false);
        } else {
          console.log(response);
          setLoading(false);
          toast.success("There is some error!");
        }
      } catch (error) {
        console.error(error);
        toast.error(error as string);
      }
    }
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {/* Chat area */}
      <div className=" flex flex-col bg-white p-4">
        {/* Messages container */}

        {/* Message input */}
        <input
          type="number"
          onChange={(e) => setToNumber(e.target.value)}
          placeholder="Type your phone number..."
          value={toNumber}
          className="flex-1 border p-2 rounded-l-md"
        />
        <div className="flex items-center">
          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border p-2 rounded-l-md"
          />
          <button
            disabled={loading}
            className="bg-blue-500 text-white p-2 rounded-r-md"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
