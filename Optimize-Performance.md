Tối ưu perfomance

- Tối ưu source code
- Tối ưu render
- Tối ưu load trang
- Tối ưu build
- Tối ưu resource
- Tối ưu quản lý trạng thái

## Tối ưu render

`Để tối ưu hóa render trong React, có một số kỹ thuật và chiến lược bạn có thể áp dụng như sử dụng React.memo, useMemo, và useCallback`.

- ví dụ:
- ParentComponent.tsx Trước khi tối ưu:
- Vấn đề: `ChildComponent` bị re-render mỗi khi `ParentComponent` render lại, ngay cả khi count không thay đổi, vì hàm handleClick được tạo lại mỗi lần.

```javascript
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Hàm này được tạo lại mỗi lần ParentComponent render lại
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ChildComponent onClick={handleClick} count={count} />
    </div>
  );
};
```

- Giải pháp:

```javascript
// ParentComponent.tsx
import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Sử dụng useCallback để memoize hàm handleClick
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ChildComponent onClick={handleClick} count={count} />
    </div>
  );
};

export default ParentComponent;
//=========================================
// ChildComponent.tsx
import React from 'react';

// Sử dụng React.memo để tránh re-render khi props không thay đổi
const ChildComponent = React.memo(({ onClick, count }: { onClick: () => void, count: number }) => {
  console.log('ChildComponent render');
  return (
    <div>
      <button onClick={onClick}>Increase</button>
      <p>Count: {count}</p>
    </div>
  );
});

export default ChildComponent;
```

- Ngoài việc sử dụng các HOC và Hook của react ta còn còn thể tự customize HOC or Hooks để có thể cải thiện việc re-render trong quá trình làm việc.

- Khi nào nên sử dụng HOC để tối ưu render?

```
- Khi bạn có nhiều component với logic giống nhau cần được tối ưu render.
- Khi muốn tách biệt logic tối ưu hóa khỏi component chính, giúp dễ bảo trì và tái sử dụng.
```

Có thể xem thêm về customize [HOC](https://react-typescript-cheatsheet.netlify.app/docs/hoc/full_example) tại đây.

# Tối ưu load trang

- Để tối ưu hóa tốc độ tải trang trong React, bạn có thể áp dụng một số kỹ thuật sau:

1. Code Splitting (Chia nhỏ mã nguồn)
    > Sử dụng `React.lazy` và `Suspense` để tải các component theo yêu cầu thay vì tải toàn bộ ứng dụng cùng lúc. Điều này giúp giảm kích thước bundle ban đầu và tăng tốc độ tải trang.
    ```javascript

    const LazyComponent = React.lazy(() => import('./LazyComponent'));

    function App() {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      );
    }
    ```
2. Sử dụng React.memo và useMemo
> Sử dụng `React.memo` để tránh việc `re-render` không cần thiết của `component` nếu `props` không thay đổi.

> Sử dụng `useMemo` <b><i>để ghi nhớ kết quả của các tính toán phức tạp</i></b>, tránh thực hiện lại chúng mỗi khi `component re-render`.

3. Lazy Loading cho hình ảnh và tài nguyên

4. Virtualization cho danh sách lớn

5. Pre-fetching và Pre-loading

6. Giảm thiểu sử dụng thư viện nặng

7. Sử dụng các công cụ phân tích hiệu suất

8. Tối ưu hóa Bundle với Webpack/Vite

9. Tối ưu hóa các hooks và state management

10. caching data sử dụng storage của browner

11. Using CDNs