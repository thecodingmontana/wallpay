import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DetailsTabContent from "./DetailsTabContent";
import TransactionHistoryTab from "./TransactionHistoryTab";

interface BankDetailsTabsProps {
  walletId: string;
}

export default function BankDetailsTabs({ walletId }: BankDetailsTabsProps) {
  return (
    <Tabs defaultValue="details" className="w-full p-2">
      <TabsList>
        <TabsTrigger
          value="details"
          className="data-[state=active]:bg-brand dark:data-[state=active]:bg-brand data-[state=active]:rounded-full data-[state=active]:px-6 data-[state=inactive]:px-6 data-[state=active]:text-white data-[state=inactive]:text-muted-foreground cursor-pointer"
        >
          Details
        </TabsTrigger>
        <TabsTrigger
          value="transaction-history"
          className="data-[state=active]:bg-brand dark:data-[state=active]:bg-brand data-[state=active]:rounded-full data-[state=active]:px-6 data-[state=inactive]:px-6 data-[state=active]:text-white data-[state=inactive]:text-muted-foreground cursor-pointer"
        >
          Transaction History
        </TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <DetailsTabContent walletId={walletId} />
      </TabsContent>
      <TabsContent value="transaction-history">
        <TransactionHistoryTab />
      </TabsContent>
    </Tabs>
  );
}
