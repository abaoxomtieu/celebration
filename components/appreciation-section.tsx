"use client";

import { Geist } from "next/font/google";
import { useEffect, useState } from "react";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["300", "400", "500"],
});

const appreciationMessages = [
  [
    "Tập thể lớp Cao học QTKD K26B xin gửi lời tri ân sâu sắc đến tất cả quý vị. Sự tận tâm, hướng dẫn chu đáo của quý Thầy Cô đã giúp chúng em vượt qua những thử thách trong học tập và nghiên cứu. Sự quan tâm, hỗ trợ nhiệt tình của quý Anh Chị Ban cán sự cùng sự đồng hành của các Bạn học viên đã làm nên một hành trình học tập trọn vẹn, ý nghĩa và đầy kỷ niệm.",
    "Buổi tiệc tri ân hôm nay là cơ hội để chúng em bày tỏ lòng biết ơn và trân trọng từng sự đóng góp của mọi người trong quá trình học tập hoàn thành đề án thạc sĩ.",
    "Một lần nữa, tập thể lớp Cao học QTKD K26B xin trân trọng gửi lời cảm ơn sâu sắc tới tất cả quý vị!",
  ],
  [
    "Tập thể lớp Cao học QTKD K26B xin bày tỏ lòng biết ơn sâu sắc đến tất cả mọi người đã đồng hành cùng chúng em trong suốt quá trình học tập và thực hiện đề án thạc sĩ. Sự chỉ dẫn tận tâm của quý Thầy Cô đã giúp chúng em củng cố kiến thức, phát triển tư duy, đồng thời khích lệ chúng em không ngừng nỗ lực. Sự hỗ trợ nhiệt tình từ quý Anh Chị Ban cán sự và tình đoàn kết, chia sẻ của các Bạn học viên đã tạo nên một môi trường học tập đầy năng lượng và hứng khởi.",
    "Một lần nữa, chúng em xin trân trọng cảm ơn quý vị vì tất cả những đóng góp quý báu này!",
  ],
  [
    "Tập thể lớp Cao học QTKD K26B xin gửi lời tri ân chân thành đến tất cả quý vị đã dành thời gian, tâm huyết và sự quan tâm để hỗ trợ chúng em trong suốt quá trình nghiên cứu và hoàn thiện đề án thạc sĩ. Sự hướng dẫn tận tình, những lời nhận xét sâu sắc và sự khích lệ của quý Thầy Cô đã giúp chúng em tự tin hơn trên con đường học tập và nghiên cứu. Đồng thời, sự hỗ trợ chu đáo từ quý anh chị Ban cán sự và sự đoàn kết, hợp tác của các Bạn học viên đã làm cho hành trình này trở nên nhẹ nhàng, ý nghĩa và đáng nhớ hơn bao giờ hết.",
    "Một lần nữa, chúng em xin chân thành cảm ơn quý vị vì sự đồng hành quý báu này!",
  ],
  [
    "Tập thể lớp Cao học QTKD K26B xin trân trọng cảm ơn sự đồng hành và hỗ trợ quý báu của mọi người. Sự tận tâm của quý Thầy Cô trong việc hướng dẫn, giải đáp thắc mắc và chia sẻ kinh nghiệm đã giúp chúng em vượt qua những khó khăn trong quá trình học tập, nghiên cứu. Sự tận tình, chu đáo của quý anh chị Ban cán sự trong việc tổ chức các hoạt động, tạo điều kiện thuận lợi, cùng với sự hợp tác, chia sẻ kiến thức của các Bạn học viên, đã giúp chúng em hoàn thành đề án thạc sĩ một cách thành công và đáng tự hào.",
    "Một lần nữa, chúng em xin gửi lời cảm ơn sâu sắc tới tất cả quý vị!",
  ],
  [
    "Tập thể lớp Cao học QTKD K26B xin gửi lời cảm ơn sâu sắc tới tất cả quý vị đã luôn quan tâm, hướng dẫn và động viên chúng em. Sự tận tụy trong công tác giảng dạy của quý thầy cô đã giúp chúng em hiểu rõ hơn về chuyên môn, nâng cao kỹ năng nghiên cứu và khả năng tư duy phản biện. Sự nhiệt tình và chu đáo của quý Anh Chị Ban cán sự, cùng tình cảm gắn bó, hợp tác của các Bạn học viên đã tạo nên môi trường học tập tích cực và đầy hứng khởi.",
    "Một lần nữa, chúng em xin chân thành cảm ơn tất cả quý vị đã đồng hành cùng chúng em!",
  ],
  [
    "Tập thể lớp Cao học QTKD K26B xin bày tỏ lòng biết ơn chân thành đến tất cả quý vị đã luôn đồng hành, chỉ dẫn và khích lệ chúng em trong suốt hành trình học tập. Sự tận tâm, nhiệt huyết của quý Thầy Cô đã truyền cảm hứng, giúp chúng em không chỉ học hỏi kiến thức mà còn rèn luyện kỹ năng nghiên cứu, phân tích và quản lý. Sự hỗ trợ tận tình của quý Anh Chị Ban cán sự và tinh thần hợp tác, chia sẻ kinh nghiệm giữa các Bạn học viên đã làm cho quá trình thực hiện đề án thạc sĩ trở nên nhẹ nhàng, hiệu quả và đáng nhớ hơn bao giờ hết.",
    "Một lần nữa, chúng em xin gửi lời cảm ơn sâu sắc tới tất cả quý vị!",
  ],
  [
    "Tập thể lớp Cao học QTKD K26B xin gửi lời tri ân sâu sắc tới tất cả quý vị đã dành thời gian, tâm huyết và sự quan tâm trong suốt quá trình học tập và thực hiện đề án thạc sĩ. Sự chỉ dẫn tận tâm của quý Thầy Cô, sự hỗ trợ nhiệt tình và chu đáo từ quý Anh Chị Ban cán sự, cùng sự hợp tác, chia sẻ kiến thức của các Bạn học viên đã giúp chúng em vượt qua thử thách, hoàn thiện đề án và có những trải nghiệm học tập đáng nhớ.",
    "Một lần nữa, chúng em xin chân thành cảm ơn tất cả quý vị đã đồng hành cùng chúng em!",
  ],
  [
    "Tập thể lớp Cao học QTKD K26B xin gửi lời cảm ơn chân thành đến tất cả mọi người đã đồng hành, hướng dẫn và khích lệ chúng em trong suốt quá trình nghiên cứu đề án thạc sĩ. Sự tận tụy, nhiệt tình của quý Thầy Cô, sự chu đáo của quý Anh Chị Ban cán sự, cùng sự hợp tác, chia sẻ kinh nghiệm và tinh thần đoàn kết của các Bạn học viên đã giúp chúng em vượt qua mọi khó khăn và hoàn thành đề án với kết quả đáng tự hào.",
    "Một lần nữa, chúng em xin trân trọng bày tỏ lòng biết ơn tới tất cả quý vị!",
  ],
  [
    "Tập thể lớp Cao học QTKD K26B xin bày tỏ lòng biết ơn sâu sắc đến tất cả quý vị đã hỗ trợ, hướng dẫn và tạo điều kiện để chúng em hoàn thành đề án thạc sĩ. Sự tận tâm của Thầy Cô trong việc giảng dạy và hướng dẫn nghiên cứu, sự chu đáo và nhiệt tình của quý Anh Chị Ban cán sự, cùng sự hợp tác, chia sẻ kinh nghiệm của các Bạn học viên đã giúp chúng em trưởng thành, học hỏi được nhiều giá trị quý báu và trải nghiệm một hành trình học tập đầy ý nghĩa.",
    "Một lần nữa, chúng em xin chân thành cảm ơn tất cả quý vị!",
  ],
  [
    "Tập thể lớp Cao học QTKD K26B xin trân trọng gửi lời cảm ơn sâu sắc tới tất cả quý vị đã dành thời gian, sự quan tâm và hỗ trợ chúng em trong suốt quá trình nghiên cứu và hoàn thiện đề án thạc sĩ. Sự tận tâm của quý Thầy Cô, sự chu đáo và nhiệt tình của quý Anh Chị Ban cán sự, cùng sự hợp tác, chia sẻ kinh nghiệm của các Bạn học viên đã giúp chúng em hoàn thành một chặng đường học tập đáng nhớ, đồng thời tạo nên những kỷ niệm quý báu mà chúng em sẽ luôn ghi nhớ.",
    "Một lần nữa, chúng em xin gửi lời tri ân sâu sắc tới tất cả quý vị.",
  ],
];

const AppreciationSection = () => {
  const [selectedMessage, setSelectedMessage] = useState<string[]>([]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * appreciationMessages.length);
    setSelectedMessage(appreciationMessages[randomIndex]);
  }, []);

  return (
    <section className="relative overflow-hidden bg-blue-900 text-blue-100">
      <div className="absolute inset-0 bg-linear-to-b from-blue-800 via-blue-900 to-blue-950 opacity-95" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 py-24 sm:px-10">
        <div className="space-y-3 text-center">
          <span
            className={`${geist.className} text-xs uppercase tracking-[0.4em] text-amber-300/85`}
          >
            Những người đã đồng hành
          </span>
          <h2
            className={`${geist.className} text-3xl font-semibold tracking-tight text-white sm:text-4xl`}
          >
            Tri ân những người đã đồng hành
          </h2>
          <div className="mx-auto h-px w-20 bg-linear-to-r from-amber-400 via-amber-500 to-amber-400" />
        </div>

        <div
          className={`${geist.className} space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.65)] backdrop-blur-md sm:p-12`}
        >
          <p className="text-base leading-relaxed text-slate-100/90 sm:text-lg">
            Kính gửi quý Thầy Cô Khoa TC - NH &amp; QTKD, quý Anh Chị Ban cán sự
            các lớp, các Bạn học viên lớp Cao học QTKD K26B và Quý vị khách
            quý!
          </p>
          {selectedMessage.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-slate-100/85 sm:text-lg">
              {paragraph}
            </p>
          ))}
          <div className="border-t border-white/10 pt-8 text-right">
            <span className={`${geist.className} block text-sm text-slate-100/80`}>
              Thương mến,
            </span>
            <span className={`${geist.className} text-lg font-medium text-slate-100`}>
              Tập thể lớp Cao học QTKD K26B
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AppreciationSection };


