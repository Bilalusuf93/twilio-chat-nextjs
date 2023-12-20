import Image from "next/image";
import ContacktList from "./(components)/ContacktList";
import ChatArea from "./(components)/ChatArea";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-between p-24">
      {/* Chat container */}
      <div className=" flex overflow-hidden">
        <ChatArea />
      </div>
    </main>
  );
}
