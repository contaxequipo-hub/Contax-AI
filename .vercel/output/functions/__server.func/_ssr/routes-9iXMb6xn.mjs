import { r as __toESM } from "../_runtime.mjs";
import { E as isRedirect, g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-CpVPvNkt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-9iXMb6xn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var logo = "/contax-ai-logo.png";
var LINKS = [
	{
		href: "#inicio",
		label: "Inicio",
		id: "inicio"
	},
	{
		href: "#servicios",
		label: "Servicios",
		id: "servicios"
	},
	{
		href: "#como-funciona",
		label: "Cómo funciona",
		id: "como-funciona"
	},
	{
		href: "#sobre",
		label: "Sobre Contax-AI",
		id: "sobre"
	},
	{
		href: "#faq",
		label: "Preguntas frecuentes",
		id: "faq"
	}
];
function Nav() {
	const [active, setActive] = (0, import_react.useState)("inicio");
	(0, import_react.useEffect)(() => {
		const sections = Array.from(document.querySelectorAll("main section[id]"));
		const io = new IntersectionObserver((entries) => entries.forEach((e) => {
			if (e.isIntersecting) setActive(e.target.id);
		}), { rootMargin: "-35% 0px -55% 0px" });
		sections.forEach((s) => io.observe(s));
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "sticky top-0 z-50 flex h-[76px] items-center justify-between border-b border-line/70 bg-paper/90 backdrop-blur-[18px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-ct flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#inicio",
					"aria-label": "Contax-AI — inicio",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo,
						alt: "Contax-AI",
						className: "h-[58px] w-[184px] object-contain max-sm:w-[160px]",
						width: 1152,
						height: 576
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-7 text-[13px] text-[#6b7b82] lg:flex",
					children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: `navlink relative py-[9px] transition-colors duration-200 hover:text-ink ${active === l.id ? "active text-ink" : ""}`,
						children: l.label
					}, l.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "btn btn-primary",
					href: "#contacto",
					children: ["◔ \xA0Quiero asesorarme ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[17px]",
						children: "→"
					})]
				})
			]
		})
	});
}
var soni = "/soni.png";
var pantalla = "/pantalla ok.png";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "inicio",
		className: "hero relative flex min-h-[calc(100dvh-76px)] items-center overflow-hidden pt-8 pb-6 max-lg:pt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-ct hero-grid relative z-[2] grid w-full items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hero-enter inline-flex items-center gap-2 rounded-full bg-[#e9f0f1] px-[13px] py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-blue",
						style: { animationDelay: "0.05s" },
						children: "Estudio contable · Online 24/7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "hero-enter my-4 text-[clamp(38px,4.8vw,70px)] leading-[0.98] tracking-[-0.055em] text-ink",
						style: { animationDelay: "0.15s" },
						children: ["Contabilidad que ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-blue",
							children: "evoluciona"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-enter mb-5 max-w-[570px] text-lg leading-[1.5] text-[#687c84] max-sm:text-base",
						style: { animationDelay: "0.25s" },
						children: "Un estudio contable online que combina asesoramiento profesional, tecnología y automatización para que tu gestión impositiva sea más simple, ordenada y previsible."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "my-5 grid w-full grid-cols-1 gap-[9px] sm:grid-cols-3 sm:gap-3",
						children: [
							["Te avisamos", "Antes de cada vencimiento."],
							["Te acompañamos", "Cuando lo necesitás."],
							["Automatizamos", "Para que ganes tiempo."]
						].map(([b, s], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-enter flex min-h-[64px] flex-col items-start justify-center gap-1 rounded-[17px] border border-[#e0e8e9] bg-paper/80 px-4 py-[13px] text-[13px] text-[#536a73] shadow-[0_10px_26px_rgba(49,66,75,.07)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#c9d8db] hover:shadow-[0_16px_30px_rgba(49,66,75,.11)] max-sm:min-h-0",
							style: { animationDelay: `${.35 + i * .1}s` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "text-sm text-[#3e5963]",
								children: b
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								className: "text-[10px] leading-[1.3] text-[#829198]",
								children: s
							})]
						}, b))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-enter flex flex-wrap gap-[13px]",
						style: { animationDelay: "0.65s" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "btn btn-primary",
							href: "#contacto",
							children: ["◔ \xA0Quiero asesorarme ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[17px]",
								children: "→"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "btn btn-light",
							href: "#servicios",
							children: ["Ver servicios ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[17px]",
								children: "→"
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-enter-stage hero-stage relative flex w-full items-center justify-center overflow-visible max-lg:mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-composition relative flex w-full items-center justify-center",
					"aria-label": "Soni junto al panel de Contax-AI",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: pantalla,
								alt: "Panel de control Contax-AI",
								className: "h-auto w-full object-contain drop-shadow-xl"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "hero-soni-art absolute bottom-[-4%] left-[-4%] z-[3] block w-[34%] max-w-[270px] max-lg:w-[30%] max-sm:w-[34%]",
							src: soni,
							alt: "Soni, la IA Contable de Contax-AI",
							width: 912,
							height: 912
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "soni-bubble absolute bottom-[48%] left-[-10%] z-[20] max-w-[190px] rounded-2xl rounded-br-[2px] bg-paper px-4 py-3 text-[13px] font-bold leading-[1.35] text-ink shadow-xl border border-slate-200/90 max-sm:left-[-2%] max-sm:bottom-[42%] max-sm:max-w-[150px] max-sm:text-[11px]",
							children: ["Hola, soy Soni. Estoy aquí para ayudarte", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -bottom-1.5 right-6 h-3.5 w-3.5 rotate-45 bg-paper border-r border-b border-slate-200/90",
								"aria-hidden": "true"
							})]
						})
					]
				})
			})]
		})
	});
}
function Reveal({ children, className = "", as: Tag = "div", initialShow = false, id }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => entries.forEach((e) => {
			if (e.isIntersecting) e.target.classList.add("show");
		}), { threshold: .12 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		id,
		className: `reveal${initialShow ? " show" : ""}${className ? ` ${className}` : ""}`,
		children
	});
}
var STATS = [
	["99%", "Vencimientos al día"],
	["100%", "Asesoramiento online"],
	["24/7", "Automatizaciones"]
];
function Trust() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		initialShow: true,
		className: "container-ct mx-auto relative z-[8] -mt-[34px] max-sm:-mt-[18px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 items-center justify-center gap-6 rounded-[22px] border border-[#e3e9ea] bg-paper p-[19px] text-center shadow-[0_22px_70px_rgba(49,66,75,.13)] sm:grid-cols-3 sm:gap-0",
			children: STATS.map(([n, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "block text-[25px] text-ink",
					children: n
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] text-[#778990]",
					children: label
				})]
			}, label))
		})
	});
}
var STEPS = [
	["Nos contactás", "Contanos qué hacés y qué necesitás."],
	["Analizamos", "Revisamos tu situación fiscal."],
	["Ordenamos", "Organizamos tus obligaciones."],
	["Automatizamos", "Configuramos avisos y procesos."],
	["Te acompañamos", "Seguimos tu situación durante el año."]
];
function Process() {
	const [current, setCurrent] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => setCurrent((c) => (c + 1) % STEPS.length), 2300);
		return () => clearInterval(timer);
	}, []);
	const pct = current / (STEPS.length - 1) * 88;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "como-funciona",
		className: "section-pad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-ct",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-[42px] max-w-[690px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tag",
						children: "CÓMO FUNCIONA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "section-title",
						children: ["Tu contabilidad, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "en otro nivel." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "sub",
						children: "Un proceso simple, claro y acompañado por tecnología."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "relative pt-[15px] pb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[79px] right-[6%] left-[6%] hidden h-[3px] bg-[#dbe4e5] md:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-[79px] left-[6%] hidden h-[3px] bg-earth transition-[width] duration-700 ease-in-out md:block",
						style: { width: `${pct}%` }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-[2] grid grid-cols-1 gap-3 md:grid-cols-5 md:gap-4",
						children: STEPS.map(([title, text], i) => {
							const isActive = i === current;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								onClick: () => setCurrent(i),
								className: `min-h-[205px] cursor-pointer rounded-[23px] border bg-paper px-[18px] pt-[22px] pb-5 transition-all duration-300 ${isActive ? "-translate-y-[10px] border-earth bg-white shadow-[0_22px_45px_rgba(180,120,60,0.18)] ring-4 ring-earth/20 scale-[1.03]" : "border-[#e1e8e9] opacity-75 hover:opacity-100 shadow-[0_12px_35px_rgba(49,66,75,.05)]"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `mb-6 grid h-9 w-9 place-items-center rounded-full text-[14px] font-extrabold transition-colors duration-300 ${isActive ? "bg-earth text-white shadow-md" : "bg-[#cdb79e]/40 text-[#63777f]"}`,
										children: i + 1
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: `mb-[7px] text-[15px] font-bold ${isActive ? "text-earth" : "text-ink"}`,
										children: title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "m-0 text-xs leading-[1.5] text-[#788990]",
										children: text
									})
								]
							}, title);
						})
					})
				]
			})]
		})
	});
}
var SERVICES = [
	[
		"◎",
		"Monotributo",
		"Te ayudamos a mantener tu situación correctamente encuadrada.",
		[
			"Alta, baja y recategorización",
			"Seguimiento mensual",
			"Reporte de situación"
		]
	],
	[
		"▣",
		"Responsable Inscripto",
		"Liquidaciones y declaraciones con seguimiento profesional.",
		[
			"IVA y Ganancias",
			"Ingresos Brutos",
			"DDJJ mensuales y anuales"
		]
	],
	[
		"◌",
		"Ingresos Brutos",
		"Inscripción, liquidación y asesoramiento para tus obligaciones.",
		[
			"CABA, ARBA y Convenio Multilateral",
			"COMARB y SIFERE",
			"Certificados y padrones"
		]
	],
	[
		"⌁",
		"Regímenes de facturación",
		"Facturá correctamente, también si vendés online.",
		[
			"Factura electrónica",
			"Marketplace y e-commerce",
			"Asesoramiento"
		]
	],
	[
		"?",
		"Asistencia y asesoramiento",
		"Consultas, planificación y proyección fiscal durante todo el año.",
		[
			"Consultas ilimitadas",
			"Planificación fiscal",
			"Proyección real"
		]
	],
	[
		"↻",
		"Planes y regularización",
		"Analizamos alternativas cuando aparecen deudas u obligaciones pendientes.",
		[
			"Moratorias y planes",
			"AFIP, ARBA y AGIP",
			"Adhesión cuando corresponda"
		]
	]
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "servicios",
		className: "section-pad bg-[#f7f9f8]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-ct",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-[42px] max-w-[690px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tag",
						children: "SERVICIOS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "section-title",
						children: ["Todo lo que necesitás para ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "ordenar tu gestión." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "sub",
						children: "Desde tu primera inscripción hasta el seguimiento fiscal del día a día."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-[18px] md:grid-cols-3",
				children: SERVICES.map(([icon, title, desc, items]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "article",
					className: "min-h-[245px] rounded-3xl border border-[#e2e8e9] bg-paper p-7 shadow-[0_14px_40px_rgba(49,66,75,.06)] transition duration-300 hover:-translate-y-[7px] hover:shadow-[0_24px_55px_rgba(49,66,75,.12)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-[19px] grid h-[45px] w-[45px] place-items-center rounded-[14px] bg-[#e8eff0] text-[21px]",
							children: icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-[9px] text-lg text-ink",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] leading-[1.6] text-[#71838a]",
							children: desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-[14px] list-none p-0 text-xs leading-[1.9] text-[#667a82]",
							children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "check-li",
								children: it
							}, it))
						})
					]
				}, title))
			})]
		})
	});
}
var ROWS = [
	[
		"🔔",
		"Recordatorio enviado",
		"Vencimiento próximo · Monotributo"
	],
	[
		"✉",
		"Email automático",
		"Resumen de obligaciones"
	],
	[
		"↗",
		"Seguimiento actualizado",
		"Información sincronizada"
	],
	[
		"⚙",
		"Proceso automatizado",
		"Sin tareas repetitivas"
	]
];
function Tech() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sobre",
		className: "section-pad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-ct grid items-center gap-[60px] lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tag",
					children: "TECNOLOGÍA + CRITERIO"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "section-title",
					children: ["No queremos que recuerdes tus vencimientos. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Queremos recordártelos." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sub",
					children: "Conectamos sistemas y automatizamos tareas para que recibas avisos, emails y recordatorios en el momento indicado."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sub",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "La automatización no reemplaza al contador. Lo potencia." })
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "relative min-h-[390px] overflow-hidden rounded-[30px] bg-[#eef3f3] p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-[2] rounded-[18px] border-2 border-earth bg-paper p-[18px] shadow-[0_22px_70px_rgba(49,66,75,.13)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex gap-[7px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "h-[7px] w-[7px] rounded-full bg-[#c9d2d4]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "h-[7px] w-[7px] rounded-full bg-[#c9d2d4]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "h-[7px] w-[7px] rounded-full bg-[#c9d2d4]" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-[11px]",
						children: ROWS.map(([icon, title, sub], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "auto-row grid grid-cols-[40px_1fr_auto] items-center gap-3 rounded-[13px] border border-[#e7eded] p-3",
							style: { animationDelay: `${i * .7}s` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-[#e8eff0]",
									children: icon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "text-xs text-ink",
										children: title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-[#829198]",
										children: sub
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-[#688c78]",
									children: "✓"
								})
							]
						}, title))
					})]
				})
			})]
		})
	});
}
var AUDIENCES = [
	["🧾 Monotributista", "Querés cumplir sin estar pendiente de cada vencimiento."],
	["💻 Negocio digital", "Vendés online, por marketplace o e-commerce."],
	["📊 Responsable Inscripto", "Necesitás seguimiento fiscal integral."],
	["🚀 Emprendedor", "Querés planificar, no solamente pagar impuestos."]
];
function Audience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad bg-[#f7f9f8]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-ct grid items-center gap-[60px] lg:grid-cols-[1.1fr_.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tag",
					children: "PARA QUIÉN ES"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "section-title",
					children: ["Contax-AI es para vos ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "si querés dejar de perseguir la contabilidad." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sub",
					children: "Monotributistas, profesionales, emprendedores, negocios digitales y responsables inscriptos que valoran orden, información y anticipación."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-[13px] sm:grid-cols-2",
				children: AUDIENCES.map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "rounded-[18px] border border-earth bg-[#f7f9f8] p-[19px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "text-sm text-ink",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-[7px] mb-0 text-xs leading-[1.5] text-[#788990]",
						children: text
					})]
				}, title))
			})]
		})
	});
}
var FAQS = [
	["¿El servicio es 100% online?", "Sí. Trabajamos de manera online para que puedas gestionar tu contabilidad desde donde estés."],
	["¿Me avisan de los vencimientos?", "Sí. La propuesta de Contax-AI incorpora avisos y recordatorios automáticos para ayudarte a anticiparte."],
	["¿Trabajan con monotributistas y responsables inscriptos?", "Sí. Contamos con servicios específicos para ambas situaciones y para distintas necesidades fiscales."],
	["¿También trabajan con e-commerce?", "Sí. Podemos asesorarte sobre facturación y obligaciones vinculadas a ventas online y marketplaces."],
	["¿Puedo consultar si tengo deudas?", "Sí. Analizamos tu situación y evaluamos alternativas de regularización cuando corresponda."]
];
function Faq() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "section-pad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-ct",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-[42px] max-w-[690px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tag",
					children: "PREGUNTAS FRECUENTES"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "section-title",
					children: ["Lo que seguramente ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "querés saber." })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "max-w-[850px]",
				children: FAQS.map(([q, a], i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-line py-[22px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex cursor-pointer justify-between gap-5 font-extrabold text-ink",
							onClick: () => setOpen(isOpen ? null : i),
							children: [q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`,
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `overflow-hidden text-sm leading-[1.6] text-[#74858c] transition-all duration-300 ${isOpen ? "mt-3 max-h-[160px]" : "max-h-0"}`,
							children: a
						})]
					}, q);
				})
			})]
		})
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var schema = objectType({
	nombre: stringType().trim().min(2).max(120),
	telefono: stringType().trim().min(5).max(40),
	email: stringType().trim().email().max(160),
	consulta: stringType().trim().min(5).max(4e3)
});
var sendContactMessage = createServerFn({ method: "POST" }).inputValidator((data) => schema.parse(data)).handler(createSsrRpc("f4ab91175279d24fdd2724e2cfe526fe74336bbdfd18bfac38060247ff17403a"));
var fieldClass = "w-full rounded-[14px] border border-white/20 bg-white/10 px-4 py-3 text-[15px] text-paper placeholder:text-[#a9bcc2] outline-none transition focus:border-white/60 focus:bg-white/15";
var labelClass = "mb-2 block text-[13px] font-bold text-[#dce6e8]";
function Cta() {
	const send = useServerFn(sendContactMessage);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	async function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const fd = new FormData(form);
		setStatus("loading");
		setErrorMsg("");
		try {
			await send({ data: {
				nombre: String(fd.get("nombre") ?? ""),
				telefono: String(fd.get("telefono") ?? ""),
				email: String(fd.get("email") ?? ""),
				consulta: String(fd.get("consulta") ?? "")
			} });
			form.reset();
			setStatus("success");
		} catch (err) {
			setErrorMsg(err instanceof Error && err.message ? err.message : "No pudimos enviar tu consulta. Probá de nuevo en unos minutos.");
			setStatus("error");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacto",
		className: "section-pad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-ct",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "cta-box relative overflow-hidden rounded-[34px] bg-gradient-to-br from-ink to-blue p-[40px_30px] text-paper lg:p-[58px_62px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-[42px] lg:grid-cols-[1fr_1fr] lg:gap-[70px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:self-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-3 text-[clamp(34px,4vw,52px)] tracking-[-0.04em]",
							children: "Tu contabilidad puede funcionar de otra manera."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "m-0 max-w-[600px] leading-[1.6] text-[#dce6e8]",
							children: "Menos olvidos. Menos incertidumbre. Más orden, información y anticipación."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "grid gap-[18px]",
						noValidate: false,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelClass,
								htmlFor: "nombre",
								children: "Nombre y apellido"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "nombre",
								name: "nombre",
								type: "text",
								required: true,
								autoComplete: "name",
								placeholder: "Tu nombre completo",
								className: fieldClass
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelClass,
								htmlFor: "telefono",
								children: "Teléfono"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "telefono",
								name: "telefono",
								type: "tel",
								required: true,
								autoComplete: "tel",
								placeholder: "+54 11 0000 0000",
								className: fieldClass
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelClass,
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								name: "email",
								type: "email",
								required: true,
								autoComplete: "email",
								placeholder: "tu@email.com",
								className: fieldClass
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelClass,
								htmlFor: "consulta",
								children: "¿Qué consulta tiene?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "consulta",
								name: "consulta",
								required: true,
								rows: 4,
								placeholder: "Contanos brevemente tu situación.",
								className: `${fieldClass} resize-y`
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: status === "loading",
								className: "btn btn-light justify-center disabled:cursor-not-allowed disabled:opacity-70",
								children: status === "loading" ? "Enviando…" : "Enviar consulta"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"aria-live": "polite",
								className: "min-h-[20px] text-[13px]",
								children: [status === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "m-0 text-[#cdeede]",
									children: "¡Gracias! Te vamos a contactar a la brevedad."
								}), status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "m-0 text-[#ffc7c7]",
									children: errorMsg
								})]
							})
						]
					})]
				})
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-[#e3e9ea] py-[45px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-ct flex flex-wrap items-end justify-between gap-[30px] max-sm:block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xl font-bold tracking-tight text-ink block mb-2",
				children: "Contax-AI"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
				className: "text-[#85949a] block",
				children: "© 2026 Contax-AI · Estudio Contable · Asesoramiento online"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-[18px] text-xs text-[#71838a] max-sm:mt-[15px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#servicios",
						children: "Servicios"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#como-funciona",
						children: "Cómo funciona"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#faq",
						children: "FAQ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contacto",
						children: "Contacto"
					})
				]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-paper font-sans text-ink antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tech, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Audience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
