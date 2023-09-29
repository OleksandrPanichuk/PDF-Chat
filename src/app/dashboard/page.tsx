import { Dashboard } from "@/components/Dashboard";
import { db, getUserSubscriptionPlan } from "@/lib";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await currentUser()

  if (!user || !user.id) redirect('/auth-callback?origin=dashboard')

  const dbUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id
    }
  })


  if (!dbUser) redirect('/auth-callback?origin=dashboard')

  const subscriptionPlan = await getUserSubscriptionPlan()


  return <Dashboard subscriptionPlan={subscriptionPlan} />;
};

export default Page;
