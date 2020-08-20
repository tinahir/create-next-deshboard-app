import Head from "next/head";
import styles from "@/styles/Home.module.css";
import SideMenu from "@/components/deshboard/SideMenu";
import SelectMenu from "@/components/deshboard/SelectMenu";
import { menuItems } from "@/components/deshboard/menuItems";
import LoadDeshboardComponent from "@/components/deshboard/LoadDeshboardComponent";
import { Box } from "@material-ui/core";

export default function Home() {
  const [component, setComponent] = React.useState("Overview");
  const handleMenuChange = (component) => {
    setComponent(component);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SelectMenu
          items={menuItems}
          onMenuChange={handleMenuChange}
        ></SelectMenu>

        <SideMenu items={menuItems} onMenuChange={handleMenuChange}></SideMenu>
        {component && (
          <LoadDeshboardComponent
            component={component}
            error={<Box>Error while loading the setComponent</Box>}
          />
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
