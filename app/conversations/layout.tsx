import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversations";
import Sidebar from "../components/sidebar/Sidebar";

export default async function ConversationsLayout({ 
  children
}: {
  children: React.ReactNode
}) {
  const consersations = await getConversations();
  return (
    //@ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList 
          initialItems={consersations}  
        />
        {children}
      </div>
    </Sidebar>
  );
}
