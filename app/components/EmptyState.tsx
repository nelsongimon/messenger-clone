"use client";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  action?: () => void;
  actionLabel?: string;
}

export default function EmptyState({

}: EmptyStateProps) {
  return (
    <div className="
      px-4
      py-10
      sm:px-6
      lg:px-8
      flex
      justify-center
      items-center
      h-full
      bg-gray-100
    ">
      <div className="text-center flex items-center flex-col">
        <h3 className="
          mt-2
          text-2xl
          font-semibold
          text-gray-900
        ">
          Select a chat or start a new conversation
        </h3>
      </div>
    </div>
  );
}
