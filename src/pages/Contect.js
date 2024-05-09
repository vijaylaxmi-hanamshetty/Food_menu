import React from "react";
import Layout from "../Components/Layout/Layout";
import { Paper } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

const Contect = () => {
  return (
    <Layout>
      <div className="mb-8 px-5">
        <h4 className="font-bold mb-2 text-3xl">Contact My Restaurant</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
          beatae ducimus magni nobis culpa praesentium velit expedita quae,
          corrupti, pariatur inventore laboriosam consectetur modi impedit
          error, repudiandae obcaecati doloribus.
        </p>
      </div>
      <div className="w-full md:w-1/2 mx-auto">
        <Paper className="p-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-black text-white text-center py-2">
                  Contact Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center">
                  <SupportAgentIcon className="text-red-500" />
                  <span className="pl-2">1800-00-0000 (tollfree)</span>
                </td>
              </tr>
              <tr>
                <td className="flex items-center">
                  <MailIcon className="text-skyblue" />
                  <span className="pl-2">help@myrest.com</span>
                </td>
              </tr>
              <tr>
                <td className="flex items-center">
                  <CallIcon className="text-green-500" />
                  <span className="pl-2">1234567890</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Paper>
      </div>
    </Layout>
  );
};

export default Contect;

