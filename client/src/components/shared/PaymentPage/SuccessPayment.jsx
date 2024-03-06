import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./css/style.css";

const SuccessPayment = () => {
  const pdfRef = useRef();
  const { tranid } = useParams();

  const axiosSecure = useAxiosSecure();

  const { data: paymentData = [] } = useQuery({
    queryKey: ["paymentData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${tranid}`);
      return res?.data;
    },
  });
  const allData = paymentData?.result;
  console.log(tranid, paymentData, allData);

  const handlepdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("invoice.pdf");
    });
    console.log("click");
  };
  return (
    <div>
      <div ref={pdfRef}>
        <h2 className="design">How to download PDF file in React.js</h2>
      </div>
      <div>
        <button onClick={handlepdf}>Download PDF</button>
      </div>
    </div>
  );
};

export default SuccessPayment;
