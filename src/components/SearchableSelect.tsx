import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Option {
    value: string;
    label: string;
}

interface SearchableSelectProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    label: string;
    placeholder?: string;
}

const SearchableSelect = ({ options, value, onChange, label, placeholder }: SearchableSelectProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const filtered = options.filter((opt) =>
        opt.label.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
                setSearch("");
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const selectedLabel = options.find((o) => o.value === value)?.label ?? value;

    return (
        <div className="flex flex-col" ref={containerRef}>
            <label className="text-[10px] font-bold uppercase text-slate-400 mb-1 ml-1">
                {label}
            </label>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => { setIsOpen(!isOpen); setSearch(""); }}
                    className="flex items-center gap-2 bg-slate-50 rounded-lg py-1.5 px-3 text-sm font-semibold outline-none w-full min-w-[130px] text-left hover:bg-slate-100 transition-colors"
                >
                    <span className="flex-1 truncate text-slate-700">
                        {value ? selectedLabel : (placeholder || t('common.search', 'Search...'))}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 mt-1 w-full min-w-[200px] bg-white rounded-xl shadow-xl border border-slate-200 z-50 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-100">
                            <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder={t('common.search', 'Search...')}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full text-sm outline-none bg-transparent placeholder:text-slate-300"
                            />
                        </div>
                        <div className="max-h-[240px] overflow-y-auto overscroll-contain">
                            {filtered.length === 0 ? (
                                <div className="px-3 py-4 text-xs text-slate-400 text-center">{t('common.noResults', 'No results found')}</div>
                            ) : (
                                filtered.map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => {
                                            onChange(opt.value);
                                            setIsOpen(false);
                                            setSearch("");
                                        }}
                                        className={`w-full text-left px-3 py-2 text-sm hover:bg-indigo-50 transition-colors ${opt.value === value
                                            ? "bg-indigo-50 text-indigo-700 font-bold"
                                            : "text-slate-700 font-medium"
                                            }`}
                                    >
                                        {opt.label}
                                    </button>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchableSelect;
