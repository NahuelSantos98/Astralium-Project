import React from 'react';
import AstrologerDetails from '../Components/ComponentsAstrologerDetails/AstrologerDetails/AstrologerDetails'
import astrologers from '../assets/astrologersData';
import { useParams } from 'react-router-dom';

const AstrologerDetailsPage = () => {
  const { id } = useParams(); 
  const selectedAstrologer = astrologers.find(astrologer => astrologer.id === parseInt(id));

  return (
    <div>
      {selectedAstrologer && <AstrologerDetails astrologer={selectedAstrologer} />}
    </div>
  );
};

export default AstrologerDetailsPage;

