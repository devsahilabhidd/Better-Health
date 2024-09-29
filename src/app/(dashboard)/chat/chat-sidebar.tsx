'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HOME_ROUTE } from "@/lib/constants/constants";
import { Chat, ChatType } from "@/lib/types/chat";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Menu } from "lucide-react";

interface ChatSidebarProps {
  filteredChats: Chat[];
  selectedType: ChatType;
  setSelectedType: (value: ChatType) => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({
  filteredChats,
  selectedType,
  setSelectedType
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const id = params.get("id");
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <Button
        className="lg:hidden fixed top-4 left-4 z-20"
        onClick={toggleSidebar}
        size="icon"
        variant="outline"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <nav className={`w-full lg:w-1/5 fixed lg:static top-0 left-0 h-full bg-background z-10 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out shadow-md overflow-y-auto pb-8`}>
        <div className="sticky top-0 z-10 border-b border-gray-200">
          <h1 className="font-bold text-2xl pl-32 p-6">Chat History</h1>
          <Select
            onValueChange={(value) => {
              setSelectedType(value as ChatType);
            }}
            value={selectedType}
            defaultValue={ChatType.FOOD_AI}
          >
            <SelectTrigger>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ChatType.FOOD_AI}>Food AI Chats</SelectItem>
              <SelectItem value={ChatType.PERSONAL_CARE_AI}>Personal Care AI Chats</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ul className="flex-1 flex-col p-4 space-y-2 overflow-auto">
          {filteredChats.length !== 0 ? filteredChats.map((chat) => (
            <li key={chat.id}>
              <Link href={`/chat?id=${chat.id}`} className="cursor-pointer">
                <Card
                  className={`${chat.id === id as string ? 'bg-app-primary hover:opacity-85' : 'hover:bg-accent dark:hover:bg-gray-1'} transition duration-150 ease-in-out`}
                >
                  <CardContent className="p-4">
                    <span className="">{chat.title}</span>
                  </CardContent>
                </Card>
              </Link>
            </li>
          )) : <p className="text-center text-gray-400">No chats found</p>}
        </ul>
        <div className="w-full px-4">
          <Button
            size="lg"
            variant="app-primary"
            className="w-full"
            onClick={() => router.push(HOME_ROUTE)}
          >
            Go to Dashboard
          </Button>
        </div>
      </nav>
    </>
  );
}

export default ChatSidebar;
