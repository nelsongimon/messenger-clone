import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversations";
import Sidebar from "../components/sidebar/Sidebar";
import getUsers from "../actions/getUsers";

export default async function ConversationsLayout({
  children
}: {
  children: React.ReactNode
}) {
  const consersations = await getConversations();
  const users = await getUsers();
  return (
    //@ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList
          users={users}
          initialItems={consersations}
        />
        {children}
      </div>
    </Sidebar>
  );
}
