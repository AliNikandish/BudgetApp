// reacts
import { useEffect, useRef } from "react";

// rrd imports
import { useFetcher } from "react-router-dom";

// Icon
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef: any = useRef();
  const focusRef: any = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <fetcher.Form method="post" className="grid-sm" ref={formRef}>
      <div className="bg-gray-700 w-[500px] 2xl:w-[700px] h-[340px] p-10 mt-10 rounded">
        <h3 className="text-3xl text-slate-300 font-bold">اضافه کردن بودجه</h3>
        <div className="mt-5 flex flex-col">
          <label className="text-slate-300 font-bold mb-2" htmlFor="newBudget">
            نام بودجه
          </label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="برای مثال خرید خانه"
            required
            ref={focusRef}
          />
        </div>
        <div className="mt-5 flex flex-col">
          <label
            className="text-slate-300 font-bold mb-2"
            htmlFor="newBudgetAmount"
          >
            مقدار
          </label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="1000"
            required
            inputMode="decimal"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />

        <button
          className=" mt-5 bg-slate-950 text-white p-2 rounded w-[130px] flex gap-x-2 items-center"
          disabled={isSubmitting}
        >
          {" "}
          {isSubmitting ? (
            <span className="font-medium">در حال ثبت شدن</span>
          ) : (
            <>
              <CurrencyDollarIcon width={20} />
              <span className="font-medium">ساخت بودجه</span>
            </>
          )}
        </button>
      </div>
    </fetcher.Form>
  );
};
export default AddBudgetForm;
