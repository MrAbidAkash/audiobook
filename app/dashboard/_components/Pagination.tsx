import { Button } from "@/components/ui/button";

const Pagination = () => {
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <div className="flex-1 text-sm text-muted-foreground">
        {/*  {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected. */}

              1 of 5 page
      </div>
      <div className="space-x-2">
        <Button
          variant="outline"
          size="sm"
          /*  onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()} */
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          /*   onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()} */
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;