import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DetailsTabContent from "./DetailsTabContent";
import TransactionHistoryTab from "./TransactionHistoryTab";

export default function BankDetailsTabs() {
  return (
    <Tabs defaultValue="details" className="w-full p-2">
      <TabsList>
        <TabsTrigger
          value="details"
          className="data-[state=active]:bg-transparent dark:data-[state=active]:bg-transparent shadow-none data-[state=active]:shadow-none dark:data-[state=active]:shadow-none data-[state=active]:rounded-none dark:data-[state=active]:rounded-none data-[state=active]:border-b dark:data-[state=active]:border-x-0 data-[state=active]:border-x-0 data-[state=active]:border-t-0 dark:data-[state=active]:border-t-0 data-[state=active]:border-b-brand dark:data-[state=active]:border-b-brand text-md cursor-pointer"
        >
          Details
        </TabsTrigger>
        <TabsTrigger
          value="transaction-history"
          className="data-[state=active]:bg-transparent dark:data-[state=active]:bg-transparent shadow-none data-[state=active]:shadow-none dark:data-[state=active]:shadow-none data-[state=active]:rounded-none dark:data-[state=active]:rounded-none data-[state=active]:border-b dark:data-[state=active]:border-x-0 data-[state=active]:border-x-0 data-[state=active]:border-t-0 dark:data-[state=active]:border-t-0 data-[state=active]:border-b-brand dark:data-[state=active]:border-b-brand text-md cursor-pointer"
        >
          Transaction History
        </TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <DetailsTabContent />
      </TabsContent>
      <TabsContent value="transaction-history">
        <TransactionHistoryTab />
      </TabsContent>
    </Tabs>
  );
}
