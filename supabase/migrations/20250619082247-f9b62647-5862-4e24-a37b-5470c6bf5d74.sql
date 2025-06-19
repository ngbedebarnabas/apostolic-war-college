
-- Fix the created_at columns to have proper defaults and correct data type
ALTER TABLE public.prayer_requests 
ALTER COLUMN created_at SET DEFAULT now(),
ALTER COLUMN created_at TYPE timestamp with time zone USING created_at::timestamp with time zone;

ALTER TABLE public.testimonies 
ALTER COLUMN created_at SET DEFAULT now(),
ALTER COLUMN created_at TYPE timestamp with time zone USING created_at::timestamp with time zone;
