import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";

const workExperience = [
  {
    company: "TESI",
    role: "Desarrollador Backend",
    period: "Julio 2024 – Julio 2025",
    location: "Híbrido · Valencia",
    bullets: [
      "Reemplacé un proceso 100% manual, llevado por una persona y hojas de cálculo, con una plataforma web de autoservicio donde el usuario sube un audio y obtiene transcripción, resumen y keywords en minutos.",
      "Diseñé e implementé el pipeline en Python integrando OpenAI Whisper API y GPT-4 para procesar audios de hasta 2 horas, resolviendo las limitaciones de contexto del LLM mediante segmentación por bloques y sincronización secuencial.",
      "Desarrollé prácticamente de forma autónoma el backend completo: modelo relacional en MySQL, APIs REST con autenticación por tokens, verificación por email y trazabilidad por solicitud.",
      "Entregué resultados profesionales en JSON y PDF, además de scripts y dashboards a medida en Python y Power BI para transformar los datos procesados en informes listos para negocio.",
    ],
  },
];

const education = [
  { title: "Especialización en IA y Big Data", center: "IES Jaume II el Just", period: "2023 – 2024" },
  { title: "Técnico Superior DAM", center: "IES Jaume II el Just", period: "2020 – 2022" },
];

const certifications = [
  {
    title: "Machine Learning Specialization (3 cursos)",
    issuer: "DeepLearning.AI / Stanford",
    date: "2025",
    link: "https://coursera.org/share/f9fc5f7b5c7b2ca720c940a04aedc160",
    desc: ["Supervised ML", "Redes neuronales", "Algoritmos de optimización", "Sistemas de recomendación", "Aprendizaje por refuerzo"],
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Trayectoria"
      title="Experiencia"
      subtitle={undefined}
    >
      <div className="space-y-12">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-600 mb-8">
            Experiencia profesional
          </p>

          <div className="space-y-6">
            {workExperience.map((job, idx) => (
              <FadeIn key={job.company} delay={idx * 0.07}>
                <div className="p-px rounded-[24px] bg-gradient-to-b from-amber/20 to-transparent">
                  <div className="rounded-[23px] bg-ink-925 p-7 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="w-3 h-3 rounded-full border-2 border-amber bg-ink-950 shadow-[0_0_14px_oklch(75%_0.108_170_/_0.38)]" />
                          <h4 className="text-xl font-semibold text-ink-50">{job.company}</h4>
                        </div>
                        <p className="text-ink-400 text-sm mt-2">{job.role}</p>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-ink-400 bg-ink-900/60 border border-ink-800/60 px-2.5 py-1 rounded-full font-mono">
                          {job.period}
                        </span>
                        <p className="text-xs text-ink-600 mt-1.5">{job.location}</p>
                      </div>
                    </div>

                    <ul className="mt-6 grid md:grid-cols-2 gap-x-8 gap-y-4">
                      {job.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-2.5 text-sm text-ink-400 leading-relaxed">
                          <span className="text-amber flex-shrink-0 mt-1 text-[8px]">◆</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-600 mb-6">
              Educación
            </p>
            <div className="grid gap-4">
              {education.map((edu, idx) => (
                <FadeIn key={edu.title} delay={idx * 0.07}>
                  <div className="p-px rounded-[18px] bg-gradient-to-b from-ink-700/40 to-transparent hover:from-ink-600/30 transition-all duration-300">
                    <div className="rounded-[17px] bg-ink-925 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] min-h-[118px] flex items-start gap-2.5">
                      <span className="text-amber flex-shrink-0 text-xs mt-0.5">◈</span>
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <p className="text-ink-100 font-medium text-sm">{edu.title}</p>
                          <p className="text-ink-500 text-sm mt-1">{edu.center}</p>
                        </div>
                        <p className="text-ink-600 text-xs mt-4 font-mono">{edu.period}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-600 mb-6">
              Certificaciones
            </p>
            <div className="grid gap-4">
              {certifications.map((cert, idx) => (
                <FadeIn key={cert.title} delay={idx * 0.07}>
                  <div className="p-px rounded-[18px] bg-gradient-to-b from-amber/15 to-transparent hover:from-amber/25 transition-all duration-300">
                    <div className="rounded-[17px] bg-ink-925 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] min-h-[118px] flex items-start gap-2.5">
                      <span className="text-amber flex-shrink-0 text-xs mt-0.5">✓</span>
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <p className="text-ink-100 font-medium text-sm">{cert.title}</p>
                          <p className="text-ink-500 text-sm mt-1">{cert.issuer}</p>
                          {cert.desc && (
                            <ul className="mt-2.5 space-y-1">
                              {cert.desc.map((item) => (
                                <li key={item} className="flex items-center gap-1.5 text-xs text-ink-600">
                                  <span className="text-amber/50 text-[8px]">◆</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                          <p className="text-ink-600 text-xs font-mono">{cert.date}</p>
                          {cert.link && (
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-amber/70 hover:text-amber transition-colors font-mono"
                            >
                              Coursera ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
