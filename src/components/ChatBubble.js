import Image from "next/image";
import profile from "./../../public/profile.jpeg"

export const ChatBubble = ({ message }) => {
  return (
    <div
      className={`flex flex-row ${
        /* message.role 이 assistant 인 경우 좌측 정렬, 그 외에는 우측 정렬 */
        message.role === "assistant" ? "justify-start" : "justify-end"
      }`}
    >
      {message.role === "assistant" && (
        <div className="w-10 h-10 mr-2 rounded-full overflow-hidden">
          <Image src={profile} alt="Profile" className="w-full h-full object-cover" />
        </div>
      )}

      <div
        className={`flex items-center ${message.role === "assistant" ? "bg-neutral-200 text-neutral-900" : "bg-blue-500 text-white"} rounded-2xl px-3 py-2 max-w-[67%] whitespace-pre-wrap`}
        style={{ overflowWrap: "anywhere" }}
      >
        {message.content}
      </div>
    </div>
  );
};
