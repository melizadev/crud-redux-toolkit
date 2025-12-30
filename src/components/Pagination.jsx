import Button from "../components/Button";
const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center gap-2 mt-8">
    {Array.from({ length: totalPages }).map((_, index) => {
      const page = index + 1;
      return (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          color="zinc"
          active={currentPage === page}
        >
          {page}
        </Button>
      );
    })}
  </div>
);

export default Pagination;
