 import React from 'react';
 import { ThemeProvider} from "react-native-elements";
 import { SafeAreaProvider } from 'react-native-safe-area-context';
 import {SafeAreaView} from "react-native";
 import PasswordList from "./src/components/PasswordList";

 const App = () => {
   return (
       <SafeAreaProvider>
           <ThemeProvider>
               <SafeAreaView>
                   <PasswordList />
               </SafeAreaView>
           </ThemeProvider>
       </SafeAreaProvider>
   );
 };

 export default App;
