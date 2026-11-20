"use client";

type Props = {
  name: string;
  action: (formData: FormData) => void | Promise<void>;
};

/** Кнопка видалення з підтвердженням; відправляє ту саму форму через formAction. */
export function DeleteButton({ name, action }: Props) {
  return (
    <button
      type="submit"
      formAction={action}
      formNoValidate
      onClick={(e) => {
        if (!confirm(`Видалити «${name}»?`)) e.preventDefault();
      }}
      className="rounded-lg border border-red-300 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
    >
      Видалити
    </button>
  );
}
