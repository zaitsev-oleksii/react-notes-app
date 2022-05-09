import { useSelector } from "react-redux";

import Table from "../components/Table";
import { summaryTableConfig, categories } from "../config";


const SummaryTable = (props) => {
  const notes = useSelector(state => state);

  const data = [];
  for (const category of categories){
    data.push({ 
      category: category,
      active: notes.filter((note) => (note.category === category && note.active === true)).length, 
      archived: notes.filter((note) => (note.category === category && note.active === false)).length
    });
  }
  
  return (
    <Table className="SummaryTable" data={data} config={summaryTableConfig} />
  );
}

export default SummaryTable;