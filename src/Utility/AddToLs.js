import { Slide, Zoom, toast } from "react-toastify";

//  Get Installed Apps From LocalStorage
const getStoredBookApps = () => {
  const installedApps = localStorage.getItem("Installed Apps");
  if (installedApps) {
    return JSON.parse(installedApps);
  }
  return [];
};

//  LocalStorage Set Installed Apps
const addToBookLS = (id) => {
  const installedApps = getStoredBookApps();

  if (installedApps.includes(id)) {
    toast.warn("This App already  in Installed!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      theme: "dark",
      transition: Slide,
    });
  } else {
    installedApps.push(id);
    localStorage.setItem("Installed Apps", JSON.stringify(installedApps));

    toast.success("Installed Apps successfully!", {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
      transition: Zoom,
    });
  }
};
//  Remove Installed LS
const removeBookLS = (id) => {
  const installedApps = getStoredBookApps();
  const newInstalledApps = installedApps.filter((appId) => appId !== id);

  if (installedApps.length === newInstalledApps.length) {
    toast.info("This App is not in the list!", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
      transition: Zoom,
    });
  } else {
    localStorage.setItem("Installed Apps", JSON.stringify(newInstalledApps));
    toast.success("App Uninstalled successfully!", {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
      transition: Zoom,
    });
  }
};

export { getStoredBookApps, addToBookLS, removeBookLS };
