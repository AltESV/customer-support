import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Fana Customer Service Chat 
      </h1>
      <ul>
        <li className="hidden text-l md:block">
          💁
          <span className="ml-2">
            Have a question or need help. Our Chat below is available 24/7 to help you.{" "}
          </span>
        </li>
        <li className="text-l">
          🔗
          <span className="ml-2">
            You can find our FAQ with the most common tasks {" "}
            <a
              href="https://www.fanaverse.io/"
              target="_blank"
            >
              via this Link 
            </a>
            !
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      showIntermediateStepsToggle={true}
      placeholder={
        'Type and submit a question to start chat'
      }
      emoji="😄"
      titleText="Kitty"
    ></ChatWindow>
  );
}
